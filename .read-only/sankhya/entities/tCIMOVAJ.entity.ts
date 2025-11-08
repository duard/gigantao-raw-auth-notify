import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsicusEntity } from './tSICUS.entity';
import { TcibemEntity } from './tCIBEM.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TfpdepEntity } from './tFPDEP.entity';

@Index('PK_TCIMOVAJ', ['codprod', 'codbem', 'referencia', 'sequencia'], {
  unique: true,
})
@Entity('TCIMOVAJ', { schema: 'SANKHYA' })
export class TcimovajEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('char', { primary: true, name: 'CODBEM', length: 30 })
  codbem: string;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('datetime', { name: 'DTMOVTO' })
  dtmovto: Date;

  @Column('float', { name: 'VALOR', precision: 53, default: () => '(0)' })
  valor: number;

  @Column('float', { name: 'VLRDEP', precision: 53, default: () => '(0)' })
  vlrdep: number;

  @Column('int', { name: 'TIPO', nullable: true, default: () => '(1)' })
  tipo: number | null;

  @Column('smallint', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('smallint', { name: 'NUMLOTE', nullable: true })
  numlote: number | null;

  @Column('smallint', { name: 'NUMLANC', nullable: true })
  numlanc: number | null;

  @Column('smallint', {
    primary: true,
    name: 'SEQUENCIA',
    default: () => '(1)',
  })
  sequencia: number;

  @Column('varchar', { name: 'TIPMOV', length: 1, default: () => "'A'" })
  tipmov: string;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tcimovajs)
  @JoinColumn([{ name: 'CODCENCUS', referencedColumnName: 'codcencus' }])
  codcencus: TsicusEntity;

  @ManyToOne(() => TcibemEntity, (tcibemEntity) => tcibemEntity.tcimovajs)
  @JoinColumn([
    { name: 'CODBEM', referencedColumnName: 'codbem' },
    { name: 'CODPROD', referencedColumnName: 'codprod' },
  ])
  tcibem: TcibemEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tcimovajs)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TfpdepEntity, (tfpdepEntity) => tfpdepEntity.tcimovajs)
  @JoinColumn([{ name: 'CODDEP', referencedColumnName: 'coddep' }])
  coddep: TfpdepEntity;
}
