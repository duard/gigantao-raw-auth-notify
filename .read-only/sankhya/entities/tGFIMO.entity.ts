import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFIMO', ['codmotivo'], { unique: true })
@Entity('TGFIMO', { schema: 'SANKHYA' })
export class TgfimoEntity {
  @Column('int', { primary: true, name: 'CODMOTIVO' })
  codmotivo: number;

  @Column('varchar', { name: 'DESCRMOTIVO', nullable: true, length: 60 })
  descrmotivo: string | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfimos)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
