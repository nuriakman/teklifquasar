<script setup>
import JSConfetti from 'js-confetti';

const jsConfetti = new JSConfetti();

function showConfetti() {
  // jsConfetti.addConfetti();
  jsConfetti.addConfetti({
    //confettiRadius: 6,
    confettiNumber: 500,
    emojiSize: 20,
    emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
    confettiColors: [
      '#ff0a54',
      '#ff477e',
      '#ff7096',
      '#ff85a1',
      '#fbb1bd',
      '#f9bec7',
    ],
  });
}

showConfetti();
</script>

<template>
  <h1 @click="showConfetti">🎉 Congratulations!</h1>
</template>

<style>
h1 {
  text-align: center;
  cursor: pointer;
  margin-top: 3em;
}
</style>
