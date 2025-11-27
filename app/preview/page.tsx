import { redirect } from 'next/navigation'

export default function PreviewPage() {
  // This will redirect to the new site
  redirect('/(new-site)')
}
