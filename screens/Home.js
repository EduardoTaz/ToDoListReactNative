import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [tarefa, setTarefa] = useState('');
  const [listaTarefa, setListaTarefa] = useState([]);

  function adicionarTarefa() {
    if (tarefa.trim() === '') {
      return;
    }
    setListaTarefa([...listaTarefa, tarefa]);
    setTarefa('');
  }

  function marcarConcluido() {}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarefas de hoje</Text>

      <View style={styles.containerLista}>
        <FlatList
          data={listaTarefa}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.taskItemContainer}>
              <Text style={styles.taskItem}>• {item}</Text>
              <TouchableOpacity style={styles.button} onPress={marcarConcluido}>
                <Text style={styles.buttonText}>✅</Text>
              </TouchableOpacity>
            </View>
          )}
          style={styles.task_container}
        />
      </View>

      <View style={styles.addtask_container}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Escreva a tarefa"
            placeholderTextColor="#999"
            value={tarefa}
            onChangeText={setTarefa}
          />
          <TouchableOpacity style={styles.addButton} onPress={adicionarTarefa}>
            <Text style={styles.addButtonText}>➕</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    
});
