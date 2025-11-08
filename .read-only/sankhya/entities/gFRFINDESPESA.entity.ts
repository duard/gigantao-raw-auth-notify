import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TgffinEntity } from './tGFFIN.entity';
import { GfrfinrecorEntity } from './gFRFINRECOR.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { GfrfornecedorEntity } from './gFRFORNECEDOR.entity';
import { GfrfincategEntity } from './gFRFINCATEG.entity';

@Index('PK__GFRFINDE__3214EC2746C6F4EE', ['id'], { unique: true })
@Entity('GFRFINDESPESA', { schema: 'SANKHYA' })
export class GfrfindespesaEntity {
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

  @ManyToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.gfrfindespesas)
  @JoinColumn([{ name: 'NUFIN', referencedColumnName: 'nufin' }])
  nufin: TgffinEntity;

  @ManyToOne(
    () => GfrfinrecorEntity,
    (gfrfinrecorEntity) => gfrfinrecorEntity.gfrfindespesas,
  )
  @JoinColumn([{ name: 'RECORRENCIA', referencedColumnName: 'id' }])
  recorrencia: GfrfinrecorEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.gfrfindespesas)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TgfempEntity;

  @ManyToOne(
    () => GfrfornecedorEntity,
    (gfrfornecedorEntity) => gfrfornecedorEntity.gfrfindespesas,
  )
  @JoinColumn([{ name: 'FORNECEDOR', referencedColumnName: 'id' }])
  fornecedor: GfrfornecedorEntity;

  @ManyToOne(
    () => GfrfincategEntity,
    (gfrfincategEntity) => gfrfincategEntity.gfrfindespesas,
  )
  @JoinColumn([{ name: 'CATEGORIA', referencedColumnName: 'id' }])
  categoria: GfrfincategEntity;

  @ManyToOne(
    () => GfrfincategEntity,
    (gfrfincategEntity) => gfrfincategEntity.gfrfindespesas2,
  )
  @JoinColumn([{ name: 'SUBCATEGORIA', referencedColumnName: 'id' }])
  subcategoria: GfrfincategEntity;
}
