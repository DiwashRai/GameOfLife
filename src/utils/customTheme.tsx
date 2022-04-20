import { extendTheme } from '@chakra-ui/react';

export const customTheme = extendTheme({
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'facebook',
      },
    },
  },
});
