import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TcspscEntity } from './tCSPSC.entity';

@Index(
  'PK_TCSPREQTD',
  ['numcontrato', 'codprod', 'referencia', 'quantidade', 'serie'],
  {
    unique: true,
  },
)
@Entity('TCSPREQTD', { schema: 'SANKHYA' })
export class TcspreqtdEntity {
  @Column('int', { primary: true, name: 'NUMCONTRATO' })
  numcontrato: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('int', { primary: true, name: 'QUANTIDADE' })
  quantidade: number;

  @Column('money', { name: 'VALOR' })
  valor: number;

  @Column('char', { name: 'TIPO', length: 1, default: () => "'P'" })
  tipo: string;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @Column('char', {
    primary: true,
    name: 'SERIE',
    length: 25,
    default: () => "' '",
  })
  serie: string;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcspreqtds)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tcspreqtds)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TcspscEntity, (tcspscEntity) => tcspscEntity.tcspreqtds)
  @JoinColumn([
    { name: 'NUMCONTRATO', referencedColumnName: 'numcontrato' },
    { name: 'CODPROD', referencedColumnName: 'codprod' },
  ])
  tcspsc: TcspscEntity;
}
