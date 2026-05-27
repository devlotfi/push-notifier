import { Button, cn, Dropdown, Label } from "@heroui/react";
import { Download, Laptop, Moon, Sun } from "lucide-react";
import LogoSVG from "./svg/LogoSVG";
import { useContext } from "react";
import { ThemeContext } from "../context/theme-context";
import { ThemeOptions } from "../types/theme-options";
import { useTranslation } from "react-i18next";
import ArSVG from "../assets/flags/ar.svg";
import FrSVG from "../assets/flags/fr.svg";
import EnSVG from "../assets/flags/en.svg";
import { PWAContext } from "../context/pwa-context";

export default function Navbar() {
  const { i18n } = useTranslation();
  const { themeOption, setTheme } = useContext(ThemeContext);
  const { beforeInstallPromptEvent } = useContext(PWAContext);

  const switchTheme = () => {
    switch (themeOption) {
      case ThemeOptions.LIGHT:
        setTheme(ThemeOptions.DARK);
        break;
      case ThemeOptions.DARK:
        setTheme(ThemeOptions.SYSTEM);
        break;
      case ThemeOptions.SYSTEM:
        setTheme(ThemeOptions.LIGHT);
        break;
    }
  };

  const renderFlag = (languageCode: string, className?: string) => {
    switch (languageCode) {
      case "ar":
        return (
          <img
            src={ArSVG}
            alt="ar"
            className={cn("h-[1.5rem]", className)}
          ></img>
        );
      case "fr":
        return (
          <img
            src={FrSVG}
            alt="fr"
            className={cn("h-[1.5rem]", className)}
          ></img>
        );
      case "en":
        return (
          <img
            src={EnSVG}
            alt="eb"
            className={cn("h-[1.5rem]", className)}
          ></img>
        );
    }
  };

  return (
    <div className="flex flex-col p-[1rem]">
      <div className="flex h-[4rem] px-[0.8rem] justify-between items-center rounded-3xl bg-surface border border-border">
        <div className="flex items-center gap-[1rem]">
          <LogoSVG className="h-[2.2rem]" />
          <div className="hidden sm:flex text-[14pt] font-bold">
            Push Notifier
          </div>
        </div>

        <div className="flex items-center gap-[0.5rem]">
          <Dropdown>
            <Button
              size="lg"
              variant="outline"
              className="bg-background text-foreground border border-border"
            >
              {renderFlag(i18n.language)}
              <div className="flex uppercase">{i18n.language}</div>
            </Button>
            <Dropdown.Popover>
              <Dropdown.Menu
                onAction={(key) => i18n.changeLanguage(key.toString())}
              >
                <Dropdown.Item id="en" textValue="English">
                  {renderFlag("en")}
                  <Label>English</Label>
                </Dropdown.Item>
                <Dropdown.Item id="fr" textValue="English">
                  {renderFlag("fr")}
                  <Label>Français</Label>
                </Dropdown.Item>
                <Dropdown.Item id="ar" textValue="English">
                  {renderFlag("ar")}
                  <Label>العربية</Label>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Popover>
          </Dropdown>

          <Button
            isIconOnly
            size="lg"
            variant="outline"
            className="bg-background text-foreground text-[15pt] border border-border"
            onPress={switchTheme}
          >
            {themeOption === ThemeOptions.LIGHT ? (
              <Sun className="size-[1.4rem]"></Sun>
            ) : themeOption === ThemeOptions.DARK ? (
              <Moon className="size-[1.4rem]"></Moon>
            ) : (
              <Laptop className="size-[1.4rem]"></Laptop>
            )}
          </Button>

          {beforeInstallPromptEvent ? (
            <Button
              isIconOnly
              variant="outline"
              className="size-[2.5rem] text-foreground bg-background"
              onPress={() => beforeInstallPromptEvent.prompt()}
            >
              <Download className="size-[1.4rem]"></Download>
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
