import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [tarefa, setTarefa] = useState('');
  const [listaTarefa, setListaTarefa] = useState([]);

  function adicionarTarefa() {
    if (tarefa.trim() === '') { // trim remove os espaços em branco no inicio e no final de uma string
      return;
    }

    const novaTarefa = {
      id: listaTarefa.length + 1,
      nome: tarefa,
      concluido: false
    }

    setListaTarefa([...listaTarefa, novaTarefa]);
    setTarefa('');
  }

  function marcarConcluido(id) {
    const novaLista = listaTarefa.map(item => {
      if(item.id === id) {
        return{ ...item, concluido: !item.concluido }
      }
      return item
    })

    setListaTarefa(novaLista)
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarefas de hoje</Text>

      <View style={styles.containerLista}>
        <FlatList
          data={listaTarefa}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.taskItemContainer}>
              <Text style={styles.taskItem}>• {item.nome}</Text>
              <TouchableOpacity style={[
                  styles.button, 
                  item.concluido && { backgroundColor: '#4caf50' }
                ]} onPress={() => marcarConcluido(item.id)}>
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
    container: {
      flex: 1,
      backgroundColor: '#161616',
      padding: 5,
    },
    containerLista: {
      flex: 2,
      padding: 10,
    },
    taskItem: {
      flex: 1,
      backgroundColor: '#dedede',
      padding: 5,
      borderRadius: 8,
    },
    title: {
      color: '#fff'
    },
    taskItemContainer: {
      flex: 1,
      flexDirection: 'row',
      marginTop: 15,
    },
    button: {
      marginLeft: 9,
      backgroundColor: 'transparent',
      padding: 6,
      borderRadius: 5,
    }
});
