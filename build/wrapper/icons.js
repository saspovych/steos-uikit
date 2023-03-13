function plugin(UIkit) {
    if (plugin.installed) {
        return;
    }

    UIkit.icon.add(ICONS);
}

if (typeof window !== 'undefined' && window.UIkit && window.UIkit.use) {
    window.UIkit.use(plugin);
}

export default plugin;
