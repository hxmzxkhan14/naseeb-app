import { Platform, StyleSheet, TextStyle } from 'react-native';

export const authStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'space-between',
    paddingVertical: 60,
    paddingHorizontal: 30,
  },
  name_header: {
    color: 'gold',
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 24,
  },
  title: {
    color: '#FFD700', // gold
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 100,
    ...Platform.select<TextStyle>({
      web: {
        marginLeft: 30,
        fontSize: 62,
        lineHeight: 70,
      },
    }),
  },
  input: {
    height: 50,
    borderColor: '#555',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 18,
    color: '#fff',
    marginBottom: 32,
  },
  inputWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1, // This ensures it's centered vertically
    paddingHorizontal: 30,
  },
  subtitle: {
    color: '#FFD700',
    fontSize: 24,
    marginTop: 10,
    width: '80%',
    ...Platform.select<TextStyle> ({
        web: {
            marginLeft: 30,
            lineHeight: 30
        },
        ios: {
            lineHeight: 30
        }
    })
    }, 
  button: {
    backgroundColor: '#FFD700',
    paddingVertical: 15,
    borderRadius: 30,
    marginTop: 15,
    alignItems: 'center',
      },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    },
  buttonDisabled: {
    backgroundColor: '#555',
    },
  inner: {
    flex: 1,
    justifyContent: 'center',
  },
  errorText: {
    color: 'red',
    marginTop: 3,
    marginBottom: 7,
    marginLeft: 4,
    fontSize: 16,
  },
});
