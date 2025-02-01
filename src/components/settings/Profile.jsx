import { User } from "lucide-react";
import SettingSection from "./SettingSection";
import img from '../../imgs/WhatsApp Image 2025-02-01 at 22.47.33_d14d9119.jpg'
const Profile = () => {
	return (
		<SettingSection icon={User} title={"Profile"}>
			<div className='flex flex-col sm:flex-row items-center mb-6'>
				<img
					src={img}
					alt='Profile'
					className='rounded-full w-100 h-20 object-cover mr-4'
				/>

				<div>
					<h3 className='text-lg font-semibold text-gray-100'>Ahmed Ebrahem</h3>
					<p className='text-gray-400'>amezo2866@gmail.com</p>
					<p className='text-gray-400'>01277351598</p>
				</div>
			</div>

			<button className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto'>
				Edit Profile
			</button>
		</SettingSection>
	);
};
export default Profile;
