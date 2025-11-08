import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgflocEntity } from './tGFLOC.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfempEntity } from './tGFEMP.entity';

@Index('PK_TGFVCE', ['codemp', 'codlocal', 'controle', 'codprod', 'dhmov'], {
  unique: true,
})
@Entity('TGFVCE', { schema: 'SANKHYA' })
export class TgfvceEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODLOCAL' })
  codlocal: number;

  @Column('char', {
    primary: true,
    name: 'CONTROLE',
    length: 11,
    default: () => "' '",
  })
  controle: string;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('datetime', { primary: true, name: 'DHMOV' })
  dhmov: Date;

  @Column('float', { name: 'QTDEST', nullable: true, precision: 53 })
  qtdest: number | null;

  @Column('float', { name: 'QTDSAIDA', nullable: true, precision: 53 })
  qtdsaida: number | null;

  @Column('float', { name: 'QTDENTRADA', nullable: true, precision: 53 })
  qtdentrada: number | null;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.tgfvces)
  @JoinColumn([{ name: 'CODLOCAL', referencedColumnName: 'codlocal' }])
  codlocal2: TgflocEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfvces)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfvces)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;
}
