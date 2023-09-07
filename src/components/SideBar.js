import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
import WifiProtectedSetupIcon from '@mui/icons-material/WifiProtectedSetup';

function SideBar() {
  return (
    <div className="absolute bottom-20 right-3 flex flex-col gap-4">
      <ThumbUpAltIcon fontSize="large" />
      <ThumbDownIcon fontSize="large" />
      <ChatIcon fontSize="large" />
      <ShareIcon fontSize="large" />
      <WifiProtectedSetupIcon fontSize="large" />
    </div>
  );
}
export default SideBar;
