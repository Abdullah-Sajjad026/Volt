// // @ts-check

// import {
//   drawerContentPaddingX,
//   drawerContentPaddingY,
//   drawerContentSpacingY,
// } from "constants/theme/drawer";
// import {
//   AutocompleteWithLabel,
//   SelectWithLabel,
// } from "modules/shared/components";
// import { ExpandMore } from "@mui/icons-material";
// import {
//   Accordion,
//   AccordionDetails,
//   AccordionSummary,
//   Button,
//   MenuItem,
//   Typography,
// } from "@mui/material";

// /**
//  * @param { import("@mui/material").AccordionProps & {
//  * 	label: React.ReactNode,
//  * 	accordionDetailsProps?: import("@mui/material").AccordionDetailsProps
//  * } } props
//  */
// export function DrawerFilter({
//   label,
//   children,
//   accordionDetailsProps,
//   ...props
// }) {
//   return (
//     <Accordion disableGutters sx={{ boxShadow: "none" }} {...props}>
//       <AccordionSummary
//         expandIcon={<ExpandMore />}
//         sx={{
//           paddingX: drawerContentPaddingX,
//           paddingTop: drawerContentPaddingY,
//           paddingBottom: drawerContentSpacingY,
//         }}
//       >
//         {label}
//       </AccordionSummary>
//       <AccordionDetails
//         sx={{
//           paddingTop: 0,
//           display: "flex",
//           flexWrap: "wrap",
//           gap: drawerContentSpacingY,
//           paddingX: drawerContentPaddingX,
//           paddingBottom: drawerContentPaddingY,
//         }}
//         {...accordionDetailsProps}
//       >
//         {children}
//       </AccordionDetails>
//     </Accordion>
//   );
// }

// /** @param { import("@mui/material").TypographyProps } props */
// export function DrawerFilterLabel(props) {
//   return (
//     <Typography
//       variant="body1"
//       fontWeight="medium"
//       color="text.heading"
//       {...props}
//     />
//   );
// }

// /**
//  * @template T
//  * @param { import("@mui/material").ButtonProps & {
//  * 	filters: import('@/modules/shared').Filter<T>[];
//  * } } props
//  */
// export function DrawerFilterClearButton({ filters }) {
//   // If none of the filters are applied, don't show the clear button
//   if (!filters.some((filter) => filter.isApplied)) return null;

//   function onClickClear(e) {
//     e.stopPropagation();
//     filters.forEach((filter) => filter.clear());
//   }

//   return (
//     <Button
//       size="small"
//       color="error"
//       onClick={onClickClear}
//       sx={{ ml: 1, textDecoration: "underline" }}
//     >
//       Clear
//     </Button>
//   );
// }

// /**
//  * @template T
//  * @param { Partial<React.ComponentProps<typeof SelectWithLabel>> & {
//  * 	label?: string;
//  * 	filter: import('@/modules/shared').Filter<T>;
//  * } } props
//  */
// export function DrawerSelectFilter({ filter, label, ...props }) {
//   return (
//     <SelectWithLabel
//       label={label}
//       value={filter.value}
//       onChange={(e) => filter.setValue(e.target.value)}
//       labelProps={{ sx: { color: "text.secondary", fontWeight: "normal" } }}
//       {...props}
//     >
//       {filter.options.map((option) => (
//         <MenuItem key={option.value} value={option.value}>
//           {option.label}
//         </MenuItem>
//       ))}
//     </SelectWithLabel>
//   );
// }

// /**
//  * @template T
//  * @param { React.ComponentProps<typeof AutocompleteWithLabel> & {
//  *  filter: import("modules/shared/shared.types").Filter<T>
//  * } } props
//  */
// export function DrawerAutocompleteFilter({ filter, ...props }) {
//   return (
//     <AutocompleteWithLabel
//       {...props}
//       value={filter.value}
//       options={filter.options}
//       onChange={(_, value) => filter.setValue(value)}
//     />
//   );
// }
