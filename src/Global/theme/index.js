import { THEMES } from '../constants';
// import { lightShadows, darkShadows } from './shadows';
// import "@fontsource/source-sans-pro";

export const baseOptions = {
  direction: 'ltr',
  typography: {
    button: {
      fontWeight: 600,
    },
    fontFamily: 'Roboto, Source Sans Pro, Helvetica, Arial',
    // fontFamily: 'Source Sans Pro',
    h1: {
      fontSize: 64,
      fontWeight: 700,
      lineHeight: 1.5,
    },
    h2: {
      fontSize: 40,
      fontWeight: 700,
      lineHeight: 1.5,
    },
    h3: {
      fontSize: 28,
      fontWeight: 700,
      lineHeight: 1.5,
    },
    h4: {
      fontSize: 24,
      fontWeight: 700,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: 40,
      fontWeight: 700,
      lineHeight: 1.5,
    },
    subtitle1: {
      fontSize: 24,
      fontWeight: 400,
      lineHeight: 1.5,
    },
    subtitle2: {
      fontSize: 20,
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: 16,
      fontWeight: 700,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 1.5,
    },
    button: {
      fontWeight: 600,
      lineHeight: 1.5,
    },
    caption: {
      fontSize: 12,
      fontWeight: 400,
      lineHeight: 1.5,
    },
    overline: {
      fontSize: 12,
      fontWeight: 700,
      lineHeight: 1.5,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 765,
      lg: 1440,
      xl: 1920,
    },
  },
};

export const themesOptions = {
  [THEMES.LIGHT]: {
    components: {

      MuiInputBase: {
        styleOverrides: {
          input: {
            '&::placeholder': {
              opacity: 0.86,
              color: '#42526e',
            },
          },
        },
      },


      // toolbar: {
      //   minHeight: '48px',
      //   padding: '16px',
      //   '@media (min-width: 600px)': {
      //     minHeight: '48px'
      //   }
      // },

      // MuiButton: {
      //   styleOverrides: {
      //     root: {
      //       fontWeight: 500,
      //       borderRadius: '4px'
      //     }
      //   }
      // },
      // MuiPaper: {
      //   defaultProps: {
      //     elevation: 0
      //   },
      //   styleOverrides: {
      //     root: {
      //       backgroundImage: 'none'
      //     },
      //     rounded: {
      //       borderRadius: `12px`
      //     }
      //   }
      // },

      // MuiCardHeader: {
      //   styleOverrides: {
      //     root: {
      //       // color: theme.colors?.textDark,
      //       padding: '24px'
      //     },
      //     title: {
      //       fontSize: '1.125rem'
      //     }
      //   }
      // },
      // MuiCardContent: {
      //   styleOverrides: {
      //     root: {
      //       padding: '24px'
      //     }
      //   }
      // },
      // MuiCardActions: {
      //   styleOverrides: {
      //     root: {
      //       padding: '24px'
      //     }
      //   }
      // },
      // MuiListItemButton: {
      //   styleOverrides: {
      //     root: {
      //       // color: theme.darkTextPrimary,
      //       paddingTop: '10px',
      //       paddingBottom: '10px',
      //       '&.Mui-selected': {
      //         // color: theme.menuSelected,
      //         // backgroundColor: theme.menuSelectedBack,
      //         '&:hover': {
      //           // backgroundColor: theme.menuSelectedBack
      //         },
      //         '& .MuiListItemIcon-root': {
      //           // color: theme.menuSelected
      //         }
      //       },
      //       '&:hover': {
      //         // backgroundColor: theme.menuSelectedBack,
      //         // color: theme.menuSelected,
      //         '& .MuiListItemIcon-root': {
      //           // color: theme.menuSelected
      //         }
      //       }
      //     }
      //   }
      // },
      // MuiListItemIcon: {
      //   styleOverrides: {
      //     root: {
      //       // color: theme.darkTextPrimary,
      //       minWidth: '36px'
      //     }
      //   }
      // },
      // MuiListItemText: {
      //   styleOverrides: {
      //     primary: {
      //       // color: theme.textDark
      //     }
      //   }
      // },
      // MuiInputBase: {
      //   styleOverrides: {
      //     input: {
      //       // color: theme.textDark,
      //       '&::placeholder': {
      //         // color: theme.darkTextSecondary,
      //         fontSize: '0.875rem'
      //       }
      //     }
      //   }
      // },
      // MuiOutlinedInput: {
      //   styleOverrides: {
      //     root: {
      //       // background: bgColor,
      //       borderRadius: `12px`,
      //       '& .MuiOutlinedInput-notchedOutline': {
      //         // borderColor: theme.colors?.grey400
      //       },
      //       '&:hover $notchedOutline': {
      //         // borderColor: theme.colors?.primaryLight
      //       },
      //       '&.MuiInputBase-multiline': {
      //         padding: 1
      //       }
      //     },
      //     input: {
      //       fontWeight: 500,
      //       // background: bgColor,
      //       padding: '15.5px 14px',
      //       borderRadius: '12px',
      //       '&.MuiInputBase-inputSizeSmall': {
      //         padding: '10px 14px',
      //         '&.MuiInputBase-inputAdornedStart': {
      //           paddingLeft: 0
      //         }
      //       }
      //     },
      //     inputAdornedStart: {
      //       paddingLeft: 4
      //     },
      //     notchedOutline: {
      //       borderRadius: '12px'
      //     }
      //   }
      // },
      // MuiSlider: {
      //   styleOverrides: {
      //     root: {
      //       '&.Mui-disabled': {
      //         // color: theme.colors?.grey300
      //       }
      //     },
      //     mark: {
      //       // backgroundColor: theme.paper,
      //       width: '4px'
      //     },
      //     valueLabel: {
      //       // color: theme?.colors?.primaryLight
      //     }
      //   }
      // },
      // MuiDivider: {
      //   styleOverrides: {
      //     root: {
      //       // borderColor: theme.divider,
      //       opacity: 1
      //     }
      //   }
      // },
      // MuiAvatar: {
      //   styleOverrides: {
      //     root: {
      //       // color: theme.colors?.primaryDark,
      //       // background: theme.colors?.primary200
      //     }
      //   }
      // },
      // MuiChip: {
      //   styleOverrides: {
      //     root: {
      //       '&.MuiChip-deletable .MuiChip-deleteIcon': {
      //         color: 'inherit'
      //       }
      //     }
      //   }
      // },
      // MuiTooltip: {
      //   styleOverrides: {
      //     tooltip: {
      //       // color: theme.paper,
      //       // background: theme.colors?.grey700
      //     }
      //   }
      // },


    },
    palette: {
      type: 'light',
      background: {
        default: "#407CCC"
        // default: "#F1F3F5"
      },
      primary: {
        main: '#407CCC',
        contrastText: '#fefefe',
      },
      white: {
        main: '#fefefe',
        contrastText: '#333333',
      },
      secondary: {
        main: '#131822',
        contrastText: '#fefefe',
      },
      background: {
        default: '#F1F3F5',
      },
      text: {
        primary: '#333333',
        secondary: '#bdbdbd',
        disabled: '#bdbdbd',
        hint: '#bdbdbd',
      },
      error: {
        main: '#c13939',
      },
      info: {
        main: '#407CCC',
        contrastText: '#fefefe',
      },
      success: {
        main: '#318f29',
        contrastText: '#fefefe',
      },
      running: {
        main: '#318f29',
        contrastText: '#fefefe',
      },
      attention: {
        main: '#FD9729',
        contrastText: '#333333',
      },
      setup: {
        main: '#FD9729',
        contrastText: '#333333',
      },
      low_speed: {
        main: '#ecbc13',
        contrastText: '#333333',
      },
      attention_2: {
        main: '#ecbc13',
        contrastText: '#333333',
      },
      warning: {
        main: '#C13939',
        contrastText: '#333333',
      },
      stopped: {
        main: '#C13939',
        contrastText: '#333333',
      },
      notification: {
        main: '#C13939',
        contrastText: '#333333',
      },

      blue: {
        main: '#318f29',
        contrastText: '#fefefe',
      },
      divider: 'rgba(142,142,142,0.12)',
    },
    shape: {
      borderRadius: 16,
    },
    // shadows: lightShadows,
  },
  [THEMES.DARK]: {
    components: {
      MuiTableCell: {
        styleOverrides: {
          root: {
            borderBottom: '1px solid rgba(145, 158, 171, 0.24)',
          },
        },
      },




      // toolbar: {
      //   minHeight: '48px',
      //   padding: '16px',
      //   '@media (min-width: 600px)': {
      //     minHeight: '48px'
      //   }
      // },

      // MuiButton: {
      //   styleOverrides: {
      //     root: {
      //       fontWeight: 500,
      //       borderRadius: '4px'
      //     }
      //   }
      // },
      // MuiPaper: {
      //   defaultProps: {
      //     elevation: 0
      //   },
      //   styleOverrides: {
      //     root: {
      //       backgroundImage: 'none'
      //     },
      //     rounded: {
      //       borderRadius: `12px`
      //     }
      //   }
      // },

      // MuiCardHeader: {
      //   styleOverrides: {
      //     root: {
      //       // color: theme.colors?.textDark,
      //       padding: '24px'
      //     },
      //     title: {
      //       fontSize: '1.125rem'
      //     }
      //   }
      // },
      // MuiCardContent: {
      //   styleOverrides: {
      //     root: {
      //       padding: '24px'
      //     }
      //   }
      // },
      // MuiCardActions: {
      //   styleOverrides: {
      //     root: {
      //       padding: '24px'
      //     }
      //   }
      // },
      // MuiListItemButton: {
      //   styleOverrides: {
      //     root: {
      //       // color: theme.darkTextPrimary,
      //       paddingTop: '10px',
      //       paddingBottom: '10px',
      //       '&.Mui-selected': {
      //         // color: theme.menuSelected,
      //         // backgroundColor: theme.menuSelectedBack,
      //         '&:hover': {
      //           // backgroundColor: theme.menuSelectedBack
      //         },
      //         '& .MuiListItemIcon-root': {
      //           // color: theme.menuSelected
      //         }
      //       },
      //       '&:hover': {
      //         // backgroundColor: theme.menuSelectedBack,
      //         // color: theme.menuSelected,
      //         '& .MuiListItemIcon-root': {
      //           // color: theme.menuSelected
      //         }
      //       }
      //     }
      //   }
      // },
      // MuiListItemIcon: {
      //   styleOverrides: {
      //     root: {
      //       // color: theme.darkTextPrimary,
      //       minWidth: '36px'
      //     }
      //   }
      // },
      // MuiListItemText: {
      //   styleOverrides: {
      //     primary: {
      //       // color: theme.textDark
      //     }
      //   }
      // },
      // MuiInputBase: {
      //   styleOverrides: {
      //     input: {
      //       // color: theme.textDark,
      //       '&::placeholder': {
      //         // color: theme.darkTextSecondary,
      //         fontSize: '0.875rem'
      //       }
      //     }
      //   }
      // },
      // MuiOutlinedInput: {
      //   styleOverrides: {
      //     root: {
      //       // background: bgColor,
      //       borderRadius: `12px`,
      //       '& .MuiOutlinedInput-notchedOutline': {
      //         // borderColor: theme.colors?.grey400
      //       },
      //       '&:hover $notchedOutline': {
      //         // borderColor: theme.colors?.primaryLight
      //       },
      //       '&.MuiInputBase-multiline': {
      //         padding: 1
      //       }
      //     },
      //     input: {
      //       fontWeight: 500,
      //       // background: bgColor,
      //       padding: '15.5px 14px',
      //       borderRadius: '12px',
      //       '&.MuiInputBase-inputSizeSmall': {
      //         padding: '10px 14px',
      //         '&.MuiInputBase-inputAdornedStart': {
      //           paddingLeft: 0
      //         }
      //       }
      //     },
      //     inputAdornedStart: {
      //       paddingLeft: 4
      //     },
      //     notchedOutline: {
      //       borderRadius: '12px'
      //     }
      //   }
      // },
      // MuiSlider: {
      //   styleOverrides: {
      //     root: {
      //       '&.Mui-disabled': {
      //         // color: theme.colors?.grey300
      //       }
      //     },
      //     mark: {
      //       // backgroundColor: theme.paper,
      //       width: '4px'
      //     },
      //     valueLabel: {
      //       // color: theme?.colors?.primaryLight
      //     }
      //   }
      // },
      // MuiDivider: {
      //   styleOverrides: {
      //     root: {
      //       // borderColor: theme.divider,
      //       opacity: 1
      //     }
      //   }
      // },
      // MuiAvatar: {
      //   styleOverrides: {
      //     root: {
      //       // color: theme.colors?.primaryDark,
      //       // background: theme.colors?.primary200
      //     }
      //   }
      // },
      // MuiChip: {
      //   styleOverrides: {
      //     root: {
      //       '&.MuiChip-deletable .MuiChip-deleteIcon': {
      //         color: 'inherit'
      //       }
      //     }
      //   }
      // },
      // MuiTooltip: {
      //   styleOverrides: {
      //     tooltip: {
      //       // color: theme.paper,
      //       // background: theme.colors?.grey700
      //     }
      //   }
      // },


    },
    palette: {
      background: {
        default: '#171c24',
        paper: '#222b36',
      },
      divider: 'rgba(145, 158, 171, 0.24)',
      error: {
        contrastText: '#ffffff',
        main: '#f44336',
      },
      primary: {
        contrastText: '#ffffff',
        main: '#688eff',
      },
      success: {
        contrastText: '#ffffff',
        main: '#4caf50',
      },
      white: {
        main: '#fefefe',
        contrastText: '#333333',
      },
      text: {
        primary: '#ffffff',
        secondary: '#919eab',
      },
      warning: {
        contrastText: '#ffffff',
        main: '#ff9800',
      },
      info: {
        main: '#4175f5',
        contrastText: '#fefefe',
      },
      success: {
        main: '#318f29',
        contrastText: '#fefefe',
      },
      running: {
        main: '#318f29',
        contrastText: '#fefefe',
      },
      attention: {
        main: '#FD9729',
        contrastText: '#333333',
      },
      setup: {
        main: '#FD9729',
        contrastText: '#333333',
      },
      low_speed: {
        main: '#ecbc13',
        contrastText: '#333333',
      },
      attention_2: {
        main: '#ecbc13',
        contrastText: '#333333',
      },
      warning: {
        main: '#C13939',
        contrastText: '#333333',
      },
      stopped: {
        main: '#C13939',
        contrastText: '#333333',
      },
      notification: {
        main: '#C13939',
        contrastText: '#333333',
      },
      blue: {
        main: '#318f29',
        contrastText: '#fefefe',
      },
    },
    shape: {
      borderRadius: 16,
    },
    // shadows: darkShadows,
  },
};
