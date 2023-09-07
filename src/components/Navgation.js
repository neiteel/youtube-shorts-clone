import HomeIcon from '@mui/icons-material/Home';
import MoodIcon from '@mui/icons-material/Mood';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import PersonIcon from '@mui/icons-material/Person';

function Navgation() {
  return (
    <div className="fixed inset-x-0 bottom-0 flex h-12 items-center justify-between gap-3 bg-black px-4">
      <HomeIcon />
      <MoodIcon />
      <AddCircleOutlineIcon />
      <SubscriptionsIcon />
      <PersonIcon />
    </div>
  );
}
export default Navgation;
