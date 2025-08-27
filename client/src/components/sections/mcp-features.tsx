import { useState } from "react";
import { Brain, Code, Shield, BarChart3, Zap, GitBranch, Play, Check, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

export function MCPFeaturesSection() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [demoProgress, setDemoProgress] = useState(0);

  const mcpFeatures = [
    {
      id: "infrastructure-analysis",
      icon: <Brain className="h-8 w-8 text-blue-500" />,
      title: "AI Infrastructure Analysis",
      description: "Intelligent analysis of infrastructure configurations with optimization recommendations and cost predictions.",
      tags: ["Terraform", "AWS", "Cost Optimization", "AI Analysis"],
      demo: {
        input: "terraform/production/main.tf",
        steps: [
          "Analyzing Terraform configuration...",
          "Evaluating resource dependencies...",
          "Calculating cost implications...",
          "Generating optimization recommendations..."
        ],
        results: [
          { type: "cost", message: "Potential 35% cost reduction identified", severity: "info" },
          { type: "security", message: "3 security improvements suggested", severity: "warning" },
          { type: "performance", message: "Auto-scaling optimization available", severity: "info" }
        ]
      }
    },
    {
      id: "code-review",
      icon: <Code className="h-8 w-8 text-purple-500" />,
      title: "Automated Code Review",
      description: "AI-powered code analysis for DevOps scripts, pipelines, and infrastructure code with security and best practice checks.",
      tags: ["Python", "Bash", "YAML", "Security Scanning"],
      demo: {
        input: "ci-cd/deployment-pipeline.yml",
        steps: [
          "Scanning pipeline configuration...",
          "Checking security best practices...",
          "Analyzing resource usage...",
          "Validating deployment strategies..."
        ],
        results: [
          { type: "security", message: "Secrets properly managed with vault integration", severity: "success" },
          { type: "performance", message: "Pipeline optimization: 23% faster execution possible", severity: "info" },
          { type: "compliance", message: "OWASP compliance verified", severity: "success" }
        ]
      }
    },
    {
      id: "smart-monitoring",
      icon: <BarChart3 className="h-8 w-8 text-green-500" />,
      title: "Intelligent Monitoring",
      description: "AI-enhanced monitoring with predictive alerting, anomaly detection, and automated incident response workflows.",
      tags: ["Prometheus", "Grafana", "ML Predictions", "Auto-healing"],
      demo: {
        input: "monitoring/system-metrics",
        steps: [
          "Processing system metrics...",
          "Training anomaly detection models...",
          "Analyzing historical patterns...",
          "Setting up predictive alerts..."
        ],
        results: [
          { type: "prediction", message: "CPU spike predicted in 2 hours", severity: "warning" },
          { type: "anomaly", message: "Network latency anomaly detected", severity: "warning" },
          { type: "action", message: "Auto-scaling triggered preventively", severity: "info" }
        ]
      }
    },
    {
      id: "deployment-optimizer",
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Smart Deployment Assistant",
      description: "AI-driven deployment strategy recommendations with risk assessment and rollback planning.",
      tags: ["Kubernetes", "Blue-Green", "Canary", "Risk Assessment"],
      demo: {
        input: "kubernetes/production-deployment",
        steps: [
          "Analyzing current deployment...",
          "Evaluating traffic patterns...",
          "Calculating rollback strategies...",
          "Optimizing resource allocation..."
        ],
        results: [
          { type: "strategy", message: "Canary deployment recommended (10% traffic)", severity: "info" },
          { type: "risk", message: "Low risk deployment - proceed with confidence", severity: "success" },
          { type: "resources", message: "15% resource optimization available", severity: "info" }
        ]
      }
    },
    {
      id: "security-scanner",
      icon: <Shield className="h-8 w-8 text-red-500" />,
      title: "AI Security Scanner",
      description: "Advanced security vulnerability detection with threat modeling and compliance verification.",
      tags: ["OWASP", "Vulnerability Assessment", "Compliance", "Threat Modeling"],
      demo: {
        input: "docker/production-images",
        steps: [
          "Scanning container images...",
          "Checking for known vulnerabilities...",
          "Analyzing access patterns...",
          "Generating security report..."
        ],
        results: [
          { type: "vulnerability", message: "2 medium-risk vulnerabilities found", severity: "warning" },
          { type: "compliance", message: "SOC 2 compliance requirements met", severity: "success" },
          { type: "recommendation", message: "Base image update recommended", severity: "info" }
        ]
      }
    },
    {
      id: "resource-optimizer",
      icon: <GitBranch className="h-8 w-8 text-cyan-500" />,
      title: "Resource Management AI",
      description: "Intelligent resource allocation and cost optimization with usage pattern analysis and recommendations.",
      tags: ["AWS Cost", "Resource Planning", "Capacity Management", "Optimization"],
      demo: {
        input: "aws/resource-usage-metrics",
        steps: [
          "Analyzing resource utilization...",
          "Processing cost patterns...",
          "Modeling usage predictions...",
          "Generating optimization plan..."
        ],
        results: [
          { type: "cost", message: "$2,400/month savings opportunity identified", severity: "info" },
          { type: "efficiency", message: "45% improvement in resource utilization", severity: "success" },
          { type: "planning", message: "Capacity planning for Q2 ready", severity: "info" }
        ]
      }
    }
  ];

  const runDemo = (featureId: string) => {
    setActiveDemo(featureId);
    setDemoProgress(0);
    
    const feature = mcpFeatures.find(f => f.id === featureId);
    if (!feature) return;

    let step = 0;
    const interval = setInterval(() => {
      step++;
      setDemoProgress((step / feature.demo.steps.length) * 100);
      
      if (step >= feature.demo.steps.length) {
        clearInterval(interval);
        setTimeout(() => {
          setActiveDemo(null);
          setDemoProgress(0);
        }, 3000);
      }
    }, 1000);
  };

  const getActiveFeature = () => mcpFeatures.find(f => f.id === activeDemo);
  const activeFeature = getActiveFeature();

  return (
    <section id="mcp-features" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" data-testid="mcp-title">
            MCP-Powered <span className="gradient-text">AI Features</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto" data-testid="mcp-description">
            Cutting-edge AI integration showcasing Model Context Protocol capabilities for intelligent DevOps automation, 
            predictive analysis, and enhanced operational efficiency.
          </p>
        </div>

        {/* Interactive Demo Section */}
        {activeDemo && activeFeature && (
          <div className="mb-16 p-6 bg-card border border-border rounded-lg animate-scale-in">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                {activeFeature.icon}
                <h3 className="text-xl font-semibold" data-testid="demo-title">
                  {activeFeature.title} - Live Demo
                </h3>
              </div>
              <Badge variant="secondary" className="bg-primary/20 text-primary">
                Running Analysis
              </Badge>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>Processing: {activeFeature.demo.input}</span>
                <span>{Math.round(demoProgress)}%</span>
              </div>
              <Progress value={demoProgress} className="h-2" data-testid="demo-progress" />
            </div>

            <div className="mb-4">
              <div className="space-y-2">
                {activeFeature.demo.steps.map((step, index) => (
                  <div 
                    key={step}
                    className={`flex items-center gap-2 text-sm ${
                      index < (demoProgress / 100) * activeFeature.demo.steps.length 
                        ? 'text-foreground' 
                        : 'text-muted-foreground'
                    }`}
                    data-testid={`demo-step-${index}`}
                  >
                    {index < (demoProgress / 100) * activeFeature.demo.steps.length ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <div className="h-4 w-4 rounded-full border-2 border-muted-foreground/30" />
                    )}
                    {step}
                  </div>
                ))}
              </div>
            </div>

            {demoProgress === 100 && (
              <div className="space-y-2 animate-fade-in">
                <h4 className="font-semibold text-foreground mb-2">Analysis Results:</h4>
                {activeFeature.demo.results.map((result, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 p-3 bg-background rounded border"
                    data-testid={`demo-result-${index}`}
                  >
                    {result.severity === 'success' && <Check className="h-4 w-4 text-green-500" />}
                    {result.severity === 'warning' && <AlertTriangle className="h-4 w-4 text-yellow-500" />}
                    {result.severity === 'info' && <Brain className="h-4 w-4 text-blue-500" />}
                    <span className="text-sm">{result.message}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mcpFeatures.map((feature, index) => (
            <Card 
              key={feature.id}
              className="p-6 bg-card border-border hover:border-primary transition-all duration-300 animate-scale-in"
              data-testid={`mcp-feature-${index}`}
            >
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="text-xl font-semibold ml-3" data-testid={`mcp-feature-title-${index}`}>
                  {feature.title}
                </h3>
              </div>
              
              <p className="text-muted-foreground mb-4" data-testid={`mcp-feature-description-${index}`}>
                {feature.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {feature.tags.map((tag, tagIndex) => (
                  <Badge 
                    key={tag} 
                    variant="outline"
                    className="text-xs"
                    data-testid={`mcp-feature-tag-${index}-${tagIndex}`}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <Button
                onClick={() => runDemo(feature.id)}
                disabled={activeDemo === feature.id}
                className="w-full bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20"
                data-testid={`mcp-demo-button-${index}`}
              >
                <Play className="mr-2 h-4 w-4" />
                {activeDemo === feature.id ? 'Running Demo...' : 'Run Live Demo'}
              </Button>
            </Card>
          ))}
        </div>

        {/* Technical Implementation Details */}
        <div className="mt-16 p-6 bg-muted/20 rounded-lg border border-border">
          <h3 className="text-2xl font-semibold mb-4" data-testid="mcp-implementation-title">
            MCP Integration Architecture
          </h3>
          <Tabs defaultValue="protocol" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="protocol">Protocol Layer</TabsTrigger>
              <TabsTrigger value="ai-models">AI Models</TabsTrigger>
              <TabsTrigger value="automation">Automation</TabsTrigger>
            </TabsList>
            <TabsContent value="protocol" className="mt-4">
              <div className="space-y-3">
                <p className="text-muted-foreground">
                  Model Context Protocol implementation enables seamless AI agent communication with DevOps tools and infrastructure.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Real-time data exchange between AI models and infrastructure APIs</li>
                  <li>• Standardized context sharing across DevOps toolchain</li>
                  <li>• Secure authentication and authorization for AI operations</li>
                  <li>• Scalable message routing and processing architecture</li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="ai-models" className="mt-4">
              <div className="space-y-3">
                <p className="text-muted-foreground">
                  Specialized AI models trained on DevOps data patterns for intelligent analysis and predictions.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Infrastructure pattern recognition and optimization models</li>
                  <li>• Security vulnerability detection with threat intelligence</li>
                  <li>• Performance prediction and capacity planning algorithms</li>
                  <li>• Cost optimization models with resource utilization analysis</li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="automation" className="mt-4">
              <div className="space-y-3">
                <p className="text-muted-foreground">
                  Automated workflows triggered by AI insights with human-in-the-loop validation for critical operations.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Automated remediation for detected issues and anomalies</li>
                  <li>• Intelligent scaling decisions based on predicted load patterns</li>
                  <li>• Self-healing infrastructure with proactive maintenance</li>
                  <li>• Continuous optimization loops with feedback learning</li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}