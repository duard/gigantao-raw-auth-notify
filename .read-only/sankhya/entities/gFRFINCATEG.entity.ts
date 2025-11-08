import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TgftitEntity } from './tGFTIT.entity';
import { GfrfindespesaEntity } from './gFRFINDESPESA.entity';
import { GfrfinreceitasEntity } from './gFRFINRECEITAS.entity';

@Index('PK__GFRFINCA__3214EC271BDC96E9', ['id'], { unique: true })
@Index('UQ__GFRFINCA__E2AB1FF41EB90394', ['nome'], { unique: true })
@Entity('GFRFINCATEG', { schema: 'SANKHYA' })
export class GfrfincategEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID' })
  id: number;

  @Column('varchar', { name: 'NOME', unique: true, length: 30 })
  nome: string;

  @Column('char', { name: 'TIPO', length: 1 })
  tipo: string;

  @ManyToOne(
    () => GfrfincategEntity,
    (gfrfincategEntity) => gfrfincategEntity.gfrfincategs,
  )
  @JoinColumn([{ name: 'CATEGORIAPAI', referencedColumnName: 'id' }])
  categoriapai: GfrfincategEntity;

  @OneToMany(
    () => GfrfincategEntity,
    (gfrfincategEntity) => gfrfincategEntity.categoriapai,
  )
  gfrfincategs: GfrfincategEntity[];

  @ManyToMany(() => TgftitEntity, (tgftitEntity) => tgftitEntity.gfrfincategs)
  tgftits: TgftitEntity[];

  @OneToMany(
    () => GfrfindespesaEntity,
    (gfrfindespesaEntity) => gfrfindespesaEntity.categoria,
  )
  gfrfindespesas: GfrfindespesaEntity[];

  @OneToMany(
    () => GfrfindespesaEntity,
    (gfrfindespesaEntity) => gfrfindespesaEntity.subcategoria,
  )
  gfrfindespesas2: GfrfindespesaEntity[];

  @OneToMany(
    () => GfrfinreceitasEntity,
    (gfrfinreceitasEntity) => gfrfinreceitasEntity.subcategoria,
  )
  gfrfinreceitas: GfrfinreceitasEntity[];

  @OneToMany(
    () => GfrfinreceitasEntity,
    (gfrfinreceitasEntity) => gfrfinreceitasEntity.categoria,
  )
  gfrfinreceitas2: GfrfinreceitasEntity[];
}
