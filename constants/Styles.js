import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { ThemedView } from '@/components/ThemedView';
import ParallaxScrollView from '@/components/ParallaxScrollView';

export default function useDynamicStyles() {
  const colorScheme = useColorScheme(); // Get current color scheme (light or dark)
  const colors = Colors[colorScheme]; // Get the appropriate color object

  return StyleSheet.create({
    loaderContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container:{
      paddingBottom: 1
    },
    contentContainer: {
      flex: 1,
      padding: 16,
      justifyContent: 'center',
      marginHorizontal: -16,
      backgroundColor: colors.background,
    },
    headerContainer: {
      position: 'relative',
      height: 250,
    },
    headerImage:{
      color:colors.headerImage,
      shadowRadius:3,
      shadowOpacity: 0.7,
      shadowColor: '#ddd'
    },
    image: {
      width: '100%',
      height: 300,
      borderBottomLeftRadius: 8,
      borderBottomRightRadius: 8,
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.1)',
    },
    titleContainer: {
      borderBottomColor: '#ddd',
      borderBottomWidth: 3,
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      color: colors.text, 
      marginBottom:8
    },
    infoRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 8,
    },
    infoText: {
      fontSize: 14,
      color: colors.textSecondary,
      maxWidth: 130,
    },
    descriptionContainer: {
      paddingHorizontal: 0,
      paddingVertical: 0,
      backgroundColor: colors.background, 
    },
    description: {
      fontSize: 16,
      lineHeight: 22,
      color: colors.textSecondary,
      marginBottom: 16
    },
    articleContainer: {
      paddingHorizontal: 16,
      paddingVertical: 24,
      borderRadius: 8,
      backgroundColor: colors.articleBoxBackground, 
    },
    articleTitle: {
      fontSize: 14,
      textTransform: 'uppercase',
      fontWeight: 'bold',
      paddingBottom: 8,
      color: colors.text,
    },
    articleText: {
      fontSize: 14,
      lineHeight: 22,
      color: colors.textTertiary, 
    },
    relatedContainer: {
      marginTop: 20,
    },
    relatedTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
      color: colors.text,
    },
    relatedWrapper: {
      marginRight: 10,
    },
  });
}
