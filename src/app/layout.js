import Provider  from './providers';
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: 'blood_cell_classification',
  description: 'blood_cell_classification',
  httpEquiv: 'Strict-Transport-Security',
  content: 'max-age=31536000; includeSubDomains; preload'
}

// const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta httpEquiv="Strict-Transport-Security" content="max-age=31536000; includeSubDomains; preload"/>
      <meta name="Content-Security-Policy" value="default-src 'self';" />
      <body suppressHydrationWarning={true} >
        <Provider>
          {children}
        </Provider>
        <SpeedInsights/>
      </body>

    </html>
  );
}
