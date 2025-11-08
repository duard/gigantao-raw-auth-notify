import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFAEM', ['nunota', 'dhalter'], { unique: true })
@Entity('TGFAEM', { schema: 'SANKHYA' })
export class TgfaemEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('datetime', {
    primary: true,
    name: 'DHALTER',
    default: () => 'getdate()',
  })
  dhalter: Date;

  @Column('smallint', { name: 'TIPO', default: () => '(1)' })
  tipo: number;

  @Column('float', { name: 'VALOR', precision: 53, default: () => '(0)' })
  valor: number;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 255 })
  observacao: string | null;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfaems, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfaems)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
