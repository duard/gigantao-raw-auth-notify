import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiempEntity } from './tSIEMP.entity';
import { TfpdepEntity } from './tFPDEP.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TCILOC', ['codprod', 'codbem', 'dtentrada'], { unique: true })
@Index('TCILOC_I01', ['nunota', 'sequencia'], {})
@Entity('TCILOC', { schema: 'SANKHYA' })
export class TcilocEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('char', { primary: true, name: 'CODBEM', length: 30 })
  codbem: string;

  @Column('datetime', { primary: true, name: 'DTENTRADA' })
  dtentrada: Date;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('smallint', { name: 'SEQUENCIA', nullable: true })
  sequencia: number | null;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tcilocs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TsiempEntity;

  @ManyToOne(() => TfpdepEntity, (tfpdepEntity) => tfpdepEntity.tcilocs)
  @JoinColumn([{ name: 'CODDEPTO', referencedColumnName: 'coddep' }])
  coddepto: TfpdepEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tcilocs)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcilocs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
