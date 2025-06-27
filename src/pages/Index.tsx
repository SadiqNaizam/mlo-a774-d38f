import { Sidebar } from "../components/layout/Sidebar";
import { FeatureList } from "../components/FeaturePanel/FeatureList";

export function Index() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 lg:ml-64 p-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            We've added some subtle animations to enhance your experience. Check out the sidebar sliding in and the feature cards below appearing sequentially.
          </p>
          <FeatureList />
        </div>
      </main>
    </div>
  );
}