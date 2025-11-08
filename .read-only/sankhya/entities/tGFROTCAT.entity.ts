import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfrotEntity } from './tGFROT.entity';

@Index('PK_TGFROTCAT', ['codrota', 'categoria', 'dtalter'], { unique: true })
@Entity('TGFROTCAT', { schema: 'SANKHYA' })
export class TgfrotcatEntity {
  @Column('int', { primary: true, name: 'CODROTA' })
  codrota: number;

  @Column('char', { primary: true, name: 'CATEGORIA', length: 20 })
  categoria: string;

  @Column('money', { name: 'VALOR', default: () => '(0)' })
  valor: number;

  @Column('datetime', {
    primary: true,
    name: 'DTALTER',
    default: () => 'getdate()',
  })
  dtalter: Date;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('char', { name: 'OBSERVACAO', nullable: true, length: 250 })
  observacao: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfrotcats)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfrotEntity, (tgfrotEntity) => tgfrotEntity.tgfrotcats)
  @JoinColumn([{ name: 'CODROTA', referencedColumnName: 'codrota' }])
  codrota2: TgfrotEntity;
}
