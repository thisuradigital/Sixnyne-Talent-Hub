import { useRef } from "react";
import { Button } from "./ui/button";
import { Download, Award } from "lucide-react";
import { Card, CardContent } from "./ui/card";

interface CertificateProps {
  userName: string;
  moduleName: string;
  date: string;
  score: number;
  isGold?: boolean;
}

export const Certificate = ({ userName, moduleName, date, score, isGold = false }: CertificateProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const generateCertificate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = 1200;
    canvas.height = 800;

    // Background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    if (isGold) {
      gradient.addColorStop(0, "#FFF7ED");
      gradient.addColorStop(1, "#FEF3C7");
    } else {
      gradient.addColorStop(0, "#EFF6FF");
      gradient.addColorStop(1, "#DBEAFE");
    }
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Border
    ctx.strokeStyle = isGold ? "#F59E0B" : "#3B82F6";
    ctx.lineWidth = 20;
    ctx.strokeRect(40, 40, canvas.width - 80, canvas.height - 80);

    // Inner border
    ctx.lineWidth = 2;
    ctx.strokeRect(60, 60, canvas.width - 120, canvas.height - 120);

    // Title
    ctx.fillStyle = isGold ? "#92400E" : "#1E40AF";
    ctx.font = "bold 56px Inter, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(
      isGold ? "MASTERCLASS CERTIFICATION" : "CERTIFICATE OF COMPLETION",
      canvas.width / 2,
      150
    );

    // Subtitle
    ctx.font = "24px Inter, sans-serif";
    ctx.fillStyle = isGold ? "#78350F" : "#1E3A8A";
    ctx.fillText("This certifies that", canvas.width / 2, 220);

    // Name
    ctx.font = "bold 48px Inter, sans-serif";
    ctx.fillStyle = isGold ? "#92400E" : "#1E40AF";
    ctx.fillText(userName, canvas.width / 2, 300);

    // Achievement text
    ctx.font = "24px Inter, sans-serif";
    ctx.fillStyle = isGold ? "#78350F" : "#1E3A8A";
    ctx.fillText("has successfully completed", canvas.width / 2, 360);

    // Module name
    ctx.font = "bold 36px Inter, sans-serif";
    ctx.fillStyle = isGold ? "#92400E" : "#1E40AF";
    ctx.fillText(moduleName, canvas.width / 2, 430);

    // Score
    ctx.font = "28px Inter, sans-serif";
    ctx.fillStyle = isGold ? "#78350F" : "#1E3A8A";
    ctx.fillText(`Score: ${score}%`, canvas.width / 2, 500);

    // Date
    ctx.font = "20px Inter, sans-serif";
    ctx.fillStyle = isGold ? "#78350F" : "#1E3A8A";
    ctx.fillText(date, canvas.width / 2, 580);

    // Seal/Badge
    ctx.beginPath();
    ctx.arc(canvas.width / 2, 680, 60, 0, 2 * Math.PI);
    ctx.fillStyle = isGold ? "#F59E0B" : "#3B82F6";
    ctx.fill();
    ctx.strokeStyle = isGold ? "#D97706" : "#2563EB";
    ctx.lineWidth = 4;
    ctx.stroke();

    ctx.fillStyle = "white";
    ctx.font = "bold 24px Inter, sans-serif";
    ctx.fillText("✓", canvas.width / 2, 695);
  };

  const handleDownload = () => {
    generateCertificate();
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Convert to blob and download
    canvas.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.download = `certificate-${moduleName.replace(/\s+/g, "-").toLowerCase()}.png`;
      link.href = url;
      link.click();
      URL.revokeObjectURL(url);
    });
  };

  // Generate preview
  setTimeout(() => generateCertificate(), 100);

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Award className={isGold ? "h-5 w-5 text-gold" : "h-5 w-5 text-primary"} />
          <h3 className="font-semibold">Your Certificate</h3>
        </div>
        
        <div className="relative mb-4 border rounded-lg overflow-hidden bg-muted">
          <canvas ref={canvasRef} className="w-full h-auto" />
        </div>

        <Button onClick={handleDownload} className="w-full" variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Download Certificate
        </Button>
      </CardContent>
    </Card>
  );
};
