import {
  FaHome,
  FaBox,
  FaImages,
  FaNetworkWired,
  FaDatabase,
} from "react-icons/fa";

export const MENU_ITEMS = [
  { name: "Home", path: "/", icon: FaHome },
  { name: "Containers", path: "/containers", icon: FaBox },
  { name: "Images", path: "/images", icon: FaImages },
  { name: "Networks", path: "/networks", icon: FaNetworkWired },
  { name: "Volumes", path: "/volumes", icon: FaDatabase },
];
