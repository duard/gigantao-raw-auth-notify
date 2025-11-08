import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TrsanuEntity } from './tRSANU.entity';

@Index('PK_TRSPFV', ['codanuncio', 'codperfil'], { unique: true })
@Entity('TRSPFV', { schema: 'SANKHYA' })
export class TrspfvEntity {
  @Column('int', { primary: true, name: 'CODANUNCIO' })
  codanuncio: number;

  @Column('int', { primary: true, name: 'CODPERFIL' })
  codperfil: number;

  @ManyToOne(() => TrsanuEntity, (trsanuEntity) => trsanuEntity.trspfvs)
  @JoinColumn([{ name: 'CODANUNCIO', referencedColumnName: 'codanuncio' }])
  codanuncio2: TrsanuEntity;
}
