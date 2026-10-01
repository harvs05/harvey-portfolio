import ServicesGrid from '@/components/ServicesGrid'

/**
 * Services is one glass sheet like Projects: the collaboration steps and
 * service cards. No ViewShell: the
 * grid supplies its own head and there is no footer to scroll to.
 */
export default function ServicesView() {
  return <ServicesGrid />
}
