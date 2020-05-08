class RenameImageColumnToImg < ActiveRecord::Migration[5.0]
  def change
    rename_column :messages, :img, :image
  end
end
