export default function Widget() {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <nav className="flex items-center justify-between p-4">
          <div className="text-2xl font-semibold">Motrew</div>
          <div className="space-x-4">
            <a href="#" className="text-muted-foreground">
              Menu
            </a>
            <a href="#" className="text-muted-foreground">
              About
            </a>
            <a href="#" className="text-muted-foreground">
              Blog
            </a>
            <a href="#" className="text-muted-foreground">
              Product
            </a>
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded">Login</button>
          </div>
        </nav>
  
        <header className="p-8 bg-card">
          <div className="flex items-center">
            <div className="w-1/2 pr-8">
              <h1 className="text-4xl font-bold">Motrew Real Estate</h1>
              <button className="mt-4 bg-secondary text-secondary-foreground px-4 py-2 rounded">Find Property</button>
            </div>
            <div className="w-1/2 relative">
              <img src="https://placehold.co/400x300" alt="Minimalist House" className="rounded-lg shadow-lg" />
              <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded">
                <span>Minimalist House</span> <br />
                <span>50 Units</span>
              </div>
            </div>
          </div>
        </header>
  
        <section className="p-8 bg-card flex justify-around text-center">
          <div>
            <span className="text-2xl font-bold">9k+</span> <br />
            <span className="text-muted-foreground">Premium Property</span>
          </div>
          <div>
            <span className="text-2xl font-bold">5k+</span> <br />
            <span className="text-muted-foreground">Happy Customer</span>
          </div>
          <div>
            <span className="text-2xl font-bold">30+</span> <br />
            <span className="text-muted-foreground">Award Winning</span>
          </div>
          <div>
            <span className="text-2xl font-bold">15</span> <br />
            <span className="text-muted-foreground">Years Experience</span>
          </div>
        </section>
  
        <section className="p-8 bg-background">
          <h2 className="text-3xl font-bold">Value We Give To You</h2>
          <div className="flex mt-4">
            <div className="w-1/3 pr-4">
              <img src="https://placehold.co/300x200" alt="Beautiful Interior" className="rounded-lg shadow-lg" />
            </div>
            <div className="w-2/3">
              <p className="text-muted-foreground">Motrew is designed to help you buy a home with confidence. Buying a home in a browser is a new thing.</p>
            </div>
          </div>
        </section>
  
        <section className="p-8 bg-card flex justify-between">
          <div>
            <h3 className="text-xl font-semibold">Our Latest Blog</h3>
            <p className="text-muted-foreground">Motrew is designed to help you buy a home with confidence. Buying a home in a browser is a new thing.</p>
            <button className="mt-4 bg-primary text-primary-foreground px-4 py-2 rounded">Learn More</button>
          </div>
          <div className="w-1/2">
            <img src="https://placehold.co/200x250" alt="Latest Blog Image" className="rounded-lg shadow-lg" />
          </div>
        </section>
  
        <footer className="p-8 bg-card text-muted-foreground">
          <div className="flex justify-between">
            <div>
              <h3>About</h3>
              <p>Information about the company</p>
            </div>
            <div>
              <h3>Service</h3>
              <p>Details of services offered</p>
            </div>
            <div>
              <h3>Company</h3>
              <p>Details about the company</p>
            </div>
            <div>
              <h3>Help</h3>
              <p>Support and assistance</p>
            </div>
          </div>
        </footer>
      </div>
    )
  }