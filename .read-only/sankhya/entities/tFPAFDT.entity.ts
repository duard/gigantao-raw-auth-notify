import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';

@Index('PK_TFPAFDT', ['codemp', 'codfunc', 'dtmov', 'hora', 'sequencia'], {
  unique: true,
})
@Index('TFPAFDT_I01', ['dtinijornada'], {})
@Index('TFPAFDT_I02', ['dtfechamento'], {})
@Entity('TFPAFDT', { schema: 'SANKHYA' })
export class TfpafdtEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('datetime', { primary: true, name: 'DTMOV' })
  dtmov: Date;

  @Column('smallint', { primary: true, name: 'HORA' })
  hora: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'TIPREGISTRO', length: 1, default: () => "'I'" })
  tipregistro: string;

  @Column('varchar', { name: 'TIPMARCACAO', nullable: true, length: 1 })
  tipmarcacao: string | null;

  @Column('smallint', { name: 'SEQTIPMARCACAO', nullable: true })
  seqtipmarcacao: number | null;

  @Column('varchar', { name: 'NURELOGIO', nullable: true, length: 17 })
  nurelogio: string | null;

  @Column('int', { name: 'NUOCOR', nullable: true })
  nuocor: number | null;

  @Column('smallint', { name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('char', { name: 'FECHADO', length: 1, default: () => "'N'" })
  fechado: string;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('datetime', { name: 'DTINIJORNADA', nullable: true })
  dtinijornada: Date | null;

  @Column('datetime', { name: 'DTFECHAMENTO', nullable: true })
  dtfechamento: Date | null;

  @Column('varchar', { name: 'CRCEMP', nullable: true, length: 4 })
  crcemp: string | null;

  @Column('varchar', { name: 'CRCFUNC', nullable: true, length: 4 })
  crcfunc: string | null;

  @Column('varchar', { name: 'GEOLOC', nullable: true, length: 100 })
  geoloc: string | null;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfpafdts)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;
}
