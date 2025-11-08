import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFEFC', ['nuficha'], { unique: true })
@Entity('TGFEFC', { schema: 'SANKHYA' })
export class TgfefcEntity {
  @Column('varchar', { primary: true, name: 'NUFICHA', length: 20 })
  nuficha: string;

  @Column('text', { name: 'MOTIVO', nullable: true })
  motivo: string | null;

  @Column('datetime', { name: 'DTREGISTRO', default: () => 'getdate()' })
  dtregistro: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfefcs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
