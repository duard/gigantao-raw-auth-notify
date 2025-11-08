import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfpempEntity } from './tFPEMP.entity';
import { TfpdepEntity } from './tFPDEP.entity';

@Index('PK_TFPPONRAIO', ['id'], { unique: true })
@Entity('TFPPONRAIO', { schema: 'SANKHYA' })
export class TfpponraioEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID' })
  id: number;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 500 })
  descricao: string | null;

  @Column('varchar', { name: 'GEOLOC', nullable: true, length: 100 })
  geoloc: string | null;

  @Column('int', { name: 'RAIO', nullable: true })
  raio: number | null;

  @Column('datetime', {
    name: 'DTCRIACAO',
    nullable: true,
    default: () => 'getdate()',
  })
  dtcriacao: Date | null;

  @Column('int', { name: 'CODCID', nullable: true })
  codcid: number | null;

  @Column('varchar', { name: 'COMPLEMENTO', nullable: true, length: 30 })
  complemento: string | null;

  @Column('varchar', { name: 'NUMEND', nullable: true, length: 6 })
  numend: string | null;

  @Column('varchar', { name: 'TEMCONTROLEPONTO', nullable: true, length: 1 })
  temcontroleponto: string | null;

  @Column('int', { name: 'CODBAI', nullable: true })
  codbai: number | null;

  @Column('int', { name: 'CODEND', nullable: true })
  codend: number | null;

  @Column('varchar', { name: 'CEP', nullable: true, length: 8 })
  cep: string | null;

  @Column('smallint', { name: 'UFENDERECO', nullable: true })
  ufendereco: number | null;

  @Column('smallint', { name: 'CODPAIS', nullable: true })
  codpais: number | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @OneToMany(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.codlocalponto)
  tfpfuns: TfpfunEntity[];

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.tfpponraios)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TfpempEntity;

  @ManyToOne(() => TfpdepEntity, (tfpdepEntity) => tfpdepEntity.tfpponraios)
  @JoinColumn([{ name: 'CODDEP', referencedColumnName: 'coddep' }])
  coddep: TfpdepEntity;
}
