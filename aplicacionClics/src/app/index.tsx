import { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";

type Registro = { id: number; numero: number; hora: string };

export default function App() {
  return (
    <View style={estilos.body}>
      <View style={estilos.card}>
        <Text style={estilos.titulo}>Interactividad con el DOM</Text>
        <Text style={estilos.subtitulo}>
          Haz clic en el botón para incrementar el contador y registrar la hora exacta.
        </Text>
        <Text style={estilos.counterBox}>0</Text>
        </View>
      </View>
  );
}

const estilos = StyleSheet.create({
  body: { flex: 1, backgroundColor: "#f4f7f6", justifyContent: "center", padding: 16 },
  card: {
    backgroundColor: "#fff", borderRadius: 16, padding: 20,
    elevation: 6, shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 12,
  },
  titulo: { fontSize: 24, fontWeight: "800", color: "#2c3e50", textAlign: "center" },
  subtitulo: { fontSize: 13, color: "#555", textAlign: "center", marginVertical: 10 },
  counterBox: { fontSize: 56, fontWeight: "bold", color: "#3498db", textAlign: "center", marginBottom: 16 },
  counterAlto: { color: "#e74c3c" },
  fila: { flexDirection: "row", justifyContent: "center", gap: 8, marginBottom: 20 },
  btnClick: { backgroundColor: "#2ecc71", paddingVertical: 12, paddingHorizontal: 14, borderRadius: 8, elevation: 3 },
  btnRestar: { backgroundColor: "#f39c12", paddingVertical: 12, paddingHorizontal: 14, borderRadius: 8, elevation: 3 },
  btnReset: { backgroundColor: "#95a5a6", paddingVertical: 12, paddingHorizontal: 14, borderRadius: 8, elevation: 3 },
  btnText: { color: "#fff", fontWeight: "bold" },
  tableContainer: { borderWidth: 1, borderColor: "#e0e0e0", borderRadius: 8, overflow: "hidden" },
  tableHeader: { flexDirection: "row", backgroundColor: "#f8f9fa", borderBottomWidth: 1, borderBottomColor: "#e0e0e0" },
  tableBody: { maxHeight: 170 },
  tr: { flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#e0e0e0", backgroundColor: "#ffffff" },
  trEven: { backgroundColor: "#fafafa" },
  th: { color: "#7f8c8d", fontWeight: "600", fontSize: 14, padding: 10, textAlign: "center" },
  td: { color: "#333", fontSize: 14, padding: 10, textAlign: "center" },
  cellNumero: { flex: 1 },
  cellHora: { flex: 1.5 },
});