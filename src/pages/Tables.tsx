import Footer from '../components/Footer'
import IFHeader from '../components/IFHeader'
import IFSideBar from '../components/IFSideBar'

const Tables = () => {
	return (
		<div>
			<IFSideBar />
			<div
				style={{
					marginLeft: '266px',
					padding: '32px'
				}}
			>
				<IFHeader title="Tables" />
				<Footer noMargin />
			</div>
		</div>
	)
}

export default Tables
