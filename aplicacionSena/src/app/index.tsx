import * as Device from 'expo-device';
import { useState } from 'react';
import { Platform, Pressable, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


import { AnimatedIcon } from '@/components/animated-icon';
import { HintRow } from '@/components/hint-row';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { WebBadge } from '@/components/web-badge';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';


const PRECIO_UNITARIO = 10000;


function getDevMenuHint() {
  if (Platform.OS === 'web') {
    return <ThemedText type="small">use browser devtools</ThemedText>;
  }
  if (Device.isDevice) {
    return (
      <ThemedText type="small">
        shake device or press <ThemedText type="code">m</ThemedText> in terminal
      </ThemedText>
    );
  }
  const shortcut = Platform.OS === 'android' ? 'cmd+m (or ctrl+m)' : 'cmd+d';
  return (
    <ThemedText type="small">
      press <ThemedText type="code">{shortcut}</ThemedText>
    </ThemedText>
  );
}


export default function HomeScreen() {
  const [cantidad, setCantidad] = useState(1);


  const aumentar = () => setCantidad((prev) => prev + 1);
  const disminuir = () => {
    if (cantidad > 1) {
      setCantidad((prev) => prev - 1);
    }
  };


  const total = PRECIO_UNITARIO * cantidad;


  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.heroSection}>
          <AnimatedIcon />
          <ThemedText type="title" style={styles.title}>
            App Sena
          </ThemedText>
        </ThemedView>


        <ThemedView type="backgroundElement" style={styles.stepContainer}>
          <ThemedText type="title" style={styles.title}>
            Producto{'\n'}${total.toLocaleString('es-CO')}
          </ThemedText>


          {/* Controles de cantidad (- / +) */}
          <View style={styles.counterRow}>
            <Pressable
              onPress={disminuir}
              disabled={cantidad <= 1}
              style={[styles.counterButton, cantidad <= 1 && styles.counterButtonDisabled]}
            >
              <ThemedText style={styles.counterButtonText}>-</ThemedText>
            </Pressable>


            <ThemedText type="subtitle" style={styles.quantityText}>
              {cantidad}
            </ThemedText>


            <Pressable onPress={aumentar} style={styles.counterButton}>
              <ThemedText style={styles.counterButtonText}>+</ThemedText>
            </Pressable>
          </View>


          <Pressable
            onPress={() => {
              // Aquí puedes conectar la compra con cantidad y total
            }}
            style={styles.button}
          >
            <ThemedText style={styles.buttonText}>
              Comprar ({cantidad})
            </ThemedText>
          </Pressable>
        </ThemedView>


        {Platform.OS === 'web' && <WebBadge />}
      </SafeAreaView>
    </ThemedView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: 'center',
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
  heroSection: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: Spacing.four,
    gap: Spacing.four,
  },
  title: {
    textAlign: 'center',
  },
  code: {
    textTransform: 'uppercase',
  },
  stepContainer: {
    gap: Spacing.three,
    alignSelf: 'stretch',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.four,
    borderRadius: Spacing.four,
  },
  counterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.four,
  },
  counterButton: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#1c6409',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterButtonDisabled: {
    opacity: 0.4,
  },
  counterButtonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 22,
  },
  quantityText: {
    minWidth: 28,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#05501e',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '600',
  },
});
