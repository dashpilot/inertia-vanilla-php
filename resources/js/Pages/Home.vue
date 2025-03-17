<template>
    <main>
        <h1>Home Page</h1>
        <p>Welcome to our Inertia.js Vanilla PHP Demo!</p>
        <nav>
            <inertia-link href="/about">About</inertia-link> |
            <inertia-link href="/contact">Contact</inertia-link>
        </nav>
        <div>
            <p>Message from server: {{ message }}</p>
        </div>
    </main>
</template>

<script>
export default {
    props: {
        message: String,
    },
};
</script>

<style>
main {
    font-family: Arial, Helvetica, sans-serif;
}
</style>
