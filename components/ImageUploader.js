import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from "react-native";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";

const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const takePhoto = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    if (status === "granted") {
      const photo = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });
      if (!photo.cancelled) {
        setImage(photo.uri);
        setShowModal(false);
      }
    }
  };

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status === "granted") {
      const photo = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });
      if (!photo.cancelled) {
        setImage(photo.uri);
        setShowModal(false);
      }
    }
  };

  return (
    <View style={styles.container}>
      {image ? (
        <Image source={{ uri: image }} style={styles.image} />
      ) : (
        <View style={styles.plusButton}>
          <TouchableOpacity onPress={() => setShowModal(true)}>
            <Text style={styles.plusButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      )}

      <Modal visible={showModal} >
        <View style={styles.modalContainer}>
          <TouchableOpacity
            onPress={() => setShowModal(false)}
            style={styles.closeButton}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={takePhoto} style={styles.modalButton}>
            <Text style={styles.modalButtonText}>Open Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={pickImage} style={styles.modalButton}>
            <Text style={styles.modalButtonText}>Upload Image</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  plusButton: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  plusButtonText: {
    fontSize: 36,
    color: "white",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
  },
  closeButtonText: {
    fontSize: 16,
    color: "black",
  },
  modalButton: {
    marginTop: 20,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
  },
  modalButtonText: {
    fontSize: 20,
    color: "black",
  },
});

export default ImageUploader;
