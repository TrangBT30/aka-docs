import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {
  useThemeConfig,
  ErrorCauseBoundary,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import {
  splitNavbarItems,
  useNavbarMobileSidebar,
} from '@docusaurus/theme-common/internal';
import NavbarItem, {type Props as NavbarItemConfig} from '@theme/NavbarItem';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import SearchBar from '@theme/SearchBar';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import NavbarLogo from '@theme/Navbar/Logo';
import NavbarSearch from '@theme/Navbar/Search';

import styles from './styles.module.css';

function useNavbarItems() {
  return useThemeConfig().navbar.items as NavbarItemConfig[];
}

function NavbarItems({items}: {items: NavbarItemConfig[]}): ReactNode {
  return (
    <>
      {items.map((item, i) => (
        <ErrorCauseBoundary
          key={i}
          onError={(error) =>
            new Error(
              `A theme navbar item failed to render.\nPlease double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:\n${JSON.stringify(item, null, 2)}`,
              {cause: error},
            )
          }>
          <NavbarItem {...item} />
        </ErrorCauseBoundary>
      ))}
    </>
  );
}

export default function NavbarContent(): ReactNode {
  const mobileSidebar = useNavbarMobileSidebar();
  const items = useNavbarItems();
  const [leftItems, rightItems] = splitNavbarItems(items);
  const searchBarItem = items.find((item) => item.type === 'search');

  return (
    <div className={clsx('navbar__inner', styles.navbarInner)}>
      {/* Left: logo + left nav items */}
      <div className={clsx(ThemeClassNames.layout.navbar.containerLeft, 'navbar__items')}>
        {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
        <NavbarLogo />
        <NavbarItems items={leftItems} />
      </div>

      {/* Center: search bar */}
      <div className={styles.navbarCenter}>
        {!searchBarItem && (
          <NavbarSearch>
            <SearchBar />
          </NavbarSearch>
        )}
      </div>

      {/* Right: right nav items + color mode toggle */}
      <div className={clsx(ThemeClassNames.layout.navbar.containerRight, 'navbar__items navbar__items--right')}>
        <NavbarItems items={rightItems} />
        <NavbarColorModeToggle className={styles.colorModeToggle} />
      </div>
    </div>
  );
}
