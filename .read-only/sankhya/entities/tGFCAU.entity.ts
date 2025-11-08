import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgaclcEntity } from './tGACLC.entity';

@Index('PK_TGFCAU', ['codclc', 'codusuclc'], { unique: true })
@Entity('TGFCAU', { schema: 'SANKHYA' })
export class TgfcauEntity {
  @Column('int', { primary: true, name: 'CODCLC' })
  codclc: number;

  @Column('smallint', { primary: true, name: 'CODUSUCLC' })
  codusuclc: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfcaus)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfcaus2)
  @JoinColumn([{ name: 'CODUSUCLC', referencedColumnName: 'codusu' }])
  codusuclc2: TsiusuEntity;

  @ManyToOne(() => TgaclcEntity, (tgaclcEntity) => tgaclcEntity.tgfcaus)
  @JoinColumn([{ name: 'CODCLC', referencedColumnName: 'codclc' }])
  codclc2: TgaclcEntity;
}
