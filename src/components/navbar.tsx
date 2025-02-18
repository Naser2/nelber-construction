import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
} from "@/components/icons";
import { Logo } from "@/components/icons";
// import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { scrollToSection } from "@/utils/scroll";



export default function TopContactBar() {
  return (
    <div className="w-full bg-green-100 text-teal-700 py-2">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12 text-sm">
        {/* Left Section */}
        <div className="flex space-x-6">
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-teal-600" />
            <span>info@nelberfarmltd.com</span>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <FaPhone className="text-teal-800" />
            <span>+254 725 706 996</span>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <FaMapMarkerAlt className="text-teal-800" />
            <span>Kimana, Kajiado South, Kenya</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export const Navbar = () => {
  

  return (<div>

<TopContactBar/>
    <HeroUINavbar maxWidth="xl" position="sticky" className="..bg-[#D7E7D7]">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            {/* <Logo /> */}
            <p className="font-bold text-xl text-inherit logo mr-12">NELBER</p>
          </Link>
        </NavbarBrand>
        <div className="hidden lg:flex gap-4 justify-start ml-2 gap-12 h-8">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-teal-600 data-[active=true]:border-b theme-text-primary font-bold data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
                onPress={() => {
                                  
                                  scrollToSection(item.href.replace("#", ""));
                                }
                              }
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          {/* <Link isExternal href={siteConfig.links.twitter} title="Twitter">
            <Linkedin className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.discord} title="Discord">
            <Instagram className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.github} title="GitHub">
            <Facebook className="text-default-500" />
          </Link> */}
          <ThemeSwitch  className="text-gray-300  stroke-gray-300"/>
        </NavbarItem>
        {/* <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem> */}
        <NavbarItem className="hidden md:flex ">
          <Button
            as={Link}
            onPress={() => scrollToSection("contact")}
            endContent={<svg className="!h-5 !w-5 arrow-icon" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.6174 23.4167C18.3703 23.4167 23.034 18.753 23.034 13C23.034 7.24704 18.3703 2.58334 12.6174 2.58334C6.86438 2.58334 2.20068 7.24704 2.20068 13C2.20068 18.753 6.86438 23.4167 12.6174 23.4167Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12.6173 17.1667L16.784 13L12.6173 8.83334" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8.45068 13H16.784" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>}
            className="bg-main-theme text-sm font-normal text-background rounded-lg px-8"
            href="#contact"
            // startContent={<HeartFilledIcon className="text-danger" />}
            variant="flat"
          >
           Get a quote
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.github}>
          <GithubIcon className="text-teal-600" />
        </Link>
        <ThemeSwitch className="text-gray-200"/>
        <NavbarMenuToggle className="text-teal-600 hover:bg-[text-teal-100]" />
      </NavbarContent>

      <NavbarMenu>
        {/* {searchInput} */}
        <div className="mx-4 mt-2 flex-col gap-2  !ml-0 bg-[#5eead417] !mt-[90px]">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index} sidebar_link `}>
              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "theme-text-primary px-6 font-bold data-[active=true]:menu-drawer__menu-item--active !h-[54px] min-w-[24px]"
                )
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  </div>
  );
};
