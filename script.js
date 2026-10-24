
import java.util.*;

public class VillageGame {
    static class Item {
        String name;
        int quantity;

        Item(String name, int quantity) {
            this.name = name;
            this.quantity = quantity;
        }
    }

    static class Villager {
        String profession;

        Villager(String profession) {
            this.profession = profession;
        }

        void trade() {
            System.out.println(profession + " villager: Welcome!");
            System.out.println("Available trade: 2 emeralds for 4 carrots.");
        }
    }

    static class Player {
        int x = 0, y = 1, z = 0;
        int health = 20;
        int emeralds = 5;

        List<Item> inventory = new ArrayList<>();

        Player() {
            inventory.add(new Item("Iron Pickaxe", 1));
            inventory.add(new Item("Iron Sword", 1));
            inventory.add(new Item("Iron Shovel", 1));
            inventory.add(new Item("Iron Hoe", 1));
            inventory.add(new Item("Iron Armor Set", 1));
            inventory.add(new Item("Oak Planks", 32));
            inventory.add(new Item("Torch", 16));
            inventory.add(new Item("Carrot", 8));
        }

        void showInventory() {
            System.out.println("\n--- Inventory ---");
            for (Item item : inventory) {
                System.out.println(item.name + " x" + item.quantity);
            }
            System.out.println("Emeralds: " + emeralds);
        }

        void move(String direction) {
            switch (direction.toLowerCase()) {
                case "w": z--; break;
                case "s": z++; break;
                case "a": x--; break;
                case "d": x++; break;
                default:
                    System.out.println("Use W, A, S, or D.");
                    return;
            }
            System.out.println("Position: " + x + ", " + y + ", " + z);
        }
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        Player player = new Player();

        List<Villager> villagers = Arrays.asList(
            new Villager("Farmer"),
            new Villager("Librarian"),
            new Villager("Blacksmith"),
            new Villager("Fletcher")
        );

        System.out.println("=== JAVA VILLAGE ADVENTURE ===");
        System.out.println("You spawned in a village!");
        System.out.println("Village includes houses, farms, a well,");
        System.out.println("villagers, crops, and a blacksmith.");
        System.out.println("You start with iron tools and armor.");

        boolean running = true;

        while (running) {
            System.out.println("\n1. Move");
            System.out.println("2. Inventory");
            System.out.println("3. Visit villagers");
            System.out.println("4. Mine an ore");
            System.out.println("5. Trade carrots");
            System.out.println("6. Exit");
            System.out.print("Choose: ");

            String choice = input.nextLine();

            switch (choice) {
                case "1":
                    System.out.print("Direction (W/A/S/D): ");
                    player.move(input.nextLine());
                    break;

                case "2":
                    player.showInventory();
                    break;

                case "3":
                    for (int i = 0; i < villagers.size(); i++) {
                        System.out.println((i + 1) + ". " +
                            villagers.get(i).profession);
                    }
                    villagers.get(0).trade();
                    break;

                case "4":
                    String[] ores = {
                        "Coal", "Iron", "Gold", "Diamond",
                        "Copper", "Redstone", "Lapis Lazuli"
                    };
                    String ore = ores[new Random().nextInt(ores.length)];
                    System.out.println("You found: " + ore + " ore!");
                    break;

                case "5":
                    if (player.emeralds >= 2) {
                        player.emeralds -= 2;
                        player.inventory.add(new Item("Carrot", 4));
                        System.out.println("Trade successful! +4 carrots.");
                    } else {
                        System.out.println("Not enough emeralds!");
                    }
                    break;

                case "6":
                    running = false;
                    System.out.println("Thanks for playing!");
                    break;

                default:
                    System.out.println("Invalid choice.");
            }
        }

        input.close();
    }
}
