import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfcabEntity } from './tGFCAB.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TGWEMPE', ['nunota', 'codprod', 'controle', 'nunotapedven'], {
  unique: true,
})
@Entity('TGWEMPE', { schema: 'SANKHYA' })
export class TgwempeEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('varchar', {
    primary: true,
    name: 'CONTROLE',
    length: 11,
    default: () => "' '",
  })
  controle: string;

  @Column('int', { name: 'NURECEBIMENTO', nullable: true })
  nurecebimento: number | null;

  @Column('varchar', { name: 'CHAVENFE', nullable: true, length: 44 })
  chavenfe: string | null;

  @Column('float', {
    name: 'QTDEMPENHO',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  qtdempenho: number | null;

  @Column('varchar', { name: 'CODVOL', length: 2 })
  codvol: string;

  @Column('date', { name: 'DTALTER', nullable: true })
  dtalter: Date | null;

  @Column('varchar', { name: 'TIPO', length: 1, default: () => "'A'" })
  tipo: string;

  @Column('int', { primary: true, name: 'NUNOTAPEDVEN', default: () => '(0)' })
  nunotapedven: number;

  @Column('char', { name: 'PENDENTE', nullable: true, length: 1 })
  pendente: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgwempes)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgwempes)
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgwempes)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;
}
