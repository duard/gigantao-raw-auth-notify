import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { TfpempEntity } from './tFPEMP.entity';
import { TfpfunEntity } from './tFPFUN.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index(
  'PK_AUDITTFPFER',
  ['id', 'codemp', 'codfunc', 'dtiniaqui', 'sequencia'],
  { unique: true },
)
@Entity('AUDITTFPFER', { schema: 'SANKHYA' })
export class AudittfpferEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('datetime', { primary: true, name: 'DTINIAQUI' })
  dtiniaqui: Date;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'OLD_DATA', nullable: true, length: 3103 })
  oldData: string | null;

  @Column('varchar', { name: 'NEW_DATA', nullable: true, length: 3103 })
  newData: string | null;

  @Column('varchar', { name: 'OPERACAO', length: 1, default: () => "'I'" })
  operacao: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @PrimaryGeneratedColumn({ type: 'bigint', name: 'ID' })
  id: string;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.audittfpfers)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.audittfpfers)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TfpempEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.audittfpfers)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
