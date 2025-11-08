import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TgffinEntity } from './tGFFIN.entity';
import { GfrfincategEntity } from './gFRFINCATEG.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { GfrfinrecorEntity } from './gFRFINRECOR.entity';

@Index('PK__GFRFINRE__3214EC2750505F28', ['id'], { unique: true })
@Entity('GFRFINRECEITAS', { schema: 'SANKHYA' })
export class GfrfinreceitasEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID' })
  id: number;

  @Column('datetime', { name: 'DTVENCIMENTO' })
  dtvencimento: Date;

  @Column('varchar', { name: 'DESCRICAO', length: 400 })
  descricao: string;

  @Column('float', { name: 'VALOR', precision: 53 })
  valor: number;

  @Column('char', { name: 'PAGO', length: 1 })
  pago: string;

  @Column('float', { name: 'JUROS', nullable: true, precision: 53 })
  juros: number | null;

  @Column('float', { name: 'VLRPAGO', nullable: true, precision: 53 })
  vlrpago: number | null;

  @Column('datetime', { name: 'DTPAGAMENTO', nullable: true })
  dtpagamento: Date | null;

  @ManyToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.gfrfinreceitas)
  @JoinColumn([{ name: 'NUFIN', referencedColumnName: 'nufin' }])
  nufin: TgffinEntity;

  @ManyToOne(
    () => GfrfincategEntity,
    (gfrfincategEntity) => gfrfincategEntity.gfrfinreceitas,
  )
  @JoinColumn([{ name: 'SUBCATEGORIA', referencedColumnName: 'id' }])
  subcategoria: GfrfincategEntity;

  @ManyToOne(
    () => GfrfincategEntity,
    (gfrfincategEntity) => gfrfincategEntity.gfrfinreceitas2,
  )
  @JoinColumn([{ name: 'CATEGORIA', referencedColumnName: 'id' }])
  categoria: GfrfincategEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.gfrfinreceitas)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TgfempEntity;

  @ManyToOne(
    () => GfrfinrecorEntity,
    (gfrfinrecorEntity) => gfrfinrecorEntity.gfrfinreceitas,
  )
  @JoinColumn([{ name: 'RECORRENCIA', referencedColumnName: 'id' }])
  recorrencia: GfrfinrecorEntity;
}
