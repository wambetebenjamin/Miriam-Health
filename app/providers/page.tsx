import ProviderDirectory from '@/components/ProviderDirectory'
export const metadata={title:'Find a midwife and provider'}
export default function Providers(){return <><section className="page-hero"><div className="container"><div className="eyebrow">Find care near you</div><h1>Meet your care team</h1><p>Browse trusted women’s health providers and choose someone who feels right for you.</p><div className="breadcrumb">Home / Providers</div></div></section><section className="section"><ProviderDirectory/></section></>}
