export interface NavigationItem {
  // Required properties
  label: string; // Display text for the menu item
  icon: string; // Material icon name or custom icon class

  // Optional properties (marked with ?)
  route?: string; // Router link/URL for navigation
  children?: NavigationItem[]; // Submenu items
  permissions?: string[]; // Access control
}
