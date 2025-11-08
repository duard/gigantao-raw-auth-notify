import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsicusEntity } from './tSICUS.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TcibemEntity } from './tCIBEM.entity';
import { TfpdepEntity } from './tFPDEP.entity';

@Index('PK_TCIMOV', ['codprod', 'codbem', 'referencia', 'sequencia'], {
  unique: true,
})
@Index('TCIMOV_I02', ['referencia', 'codprod', 'codbem', 'sequencia'], {})
@Index('TCIMOV_I03', ['referencia', 'tipmov'], {})
@Index('TCIMOV_I04', ['numlote', 'numlanc', 'codemp'], {})
@Index('TCIMOV_I05', ['codemp', 'numlote'], {})
@Index('TCIMOV_I06', ['referencia', 'codemp', 'tipmov'], {})
@Entity('TCIMOV', { schema: 'SANKHYA' })
export class TcimovEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('char', { primary: true, name: 'CODBEM', length: 30 })
  codbem: string;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('datetime', { name: 'DTMOVTO' })
  dtmovto: Date;

  @Column('money', { name: 'VALOR', default: () => '(0)' })
  valor: number;

  @Column('money', { name: 'VLRDEP', default: () => '(0)' })
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

  @Column('char', { name: 'TIPMOV', length: 1, default: () => "'A'" })
  tipmov: string;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tcimovs)
  @JoinColumn([{ name: 'CODCENCUS', referencedColumnName: 'codcencus' }])
  codcencus: TsicusEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tcimovs)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TcibemEntity, (tcibemEntity) => tcibemEntity.tcimovs)
  @JoinColumn([
    { name: 'CODBEM', referencedColumnName: 'codbem' },
    { name: 'CODPROD', referencedColumnName: 'codprod' },
  ])
  tcibem: TcibemEntity;

  @ManyToOne(() => TfpdepEntity, (tfpdepEntity) => tfpdepEntity.tcimovs)
  @JoinColumn([{ name: 'CODDEP', referencedColumnName: 'coddep' }])
  coddep: TfpdepEntity;
}
