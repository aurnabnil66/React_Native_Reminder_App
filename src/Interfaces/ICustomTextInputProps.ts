export interface ICustomTextInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  placeholderTextColor?: string;
  icon?: any;
  onIconPress?: () => void;
}
