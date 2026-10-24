export default function PageNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-background">
      <div className="max-w-md w-full">
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h1 className="font-display text-7xl font-semibold tracking-tight text-muted-foreground">
              404
            </h1>
            <div className="h-0.5 w-16 bg-border mx-auto" />
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-foreground">
              Page Not Found
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The page could not be found.
            </p>
          </div>

          <div className="pt-6">
            <button
              type="button"
              onClick={() => (window.location.href = "/")}
              className="inline-flex items-center px-5 py-2.5 text-sm font-normal text-primary-foreground bg-primary rounded-full hover:brightness-110 transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Go Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
