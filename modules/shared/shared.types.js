/**
 * The props of a form component.
 *
 * @template T
 *
 * @typedef { Omit<import("react-hook-form").UseFormReturn<T>, "handleSubmit"> } FormProps
 */

// =============================================================================
// Filters
// =============================================================================
/**
 * @typedef { Object } FilterOption
 * @property { string } value
 * @property { string } label
 */

/**
 * @template T
 * @typedef { Object } Filter
 * @property { T } value
 * @property { T } defaultValue
 * @property { () => void } clear
 * @property { boolean } isApplied
 * @property { FilterOption[] } [options]
 * @property { number } [applicationsCount]
 * @property { (value: T) => void } setValue
 */

export {};
